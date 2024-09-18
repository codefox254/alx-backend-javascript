import { readDatabase } from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase('./database.csv'); // Adjust path if needed
      res.status(200).write('This is the list of our students\n');
      
      const sortedFields = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      sortedFields.forEach(field => {
        res.write(`Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`);
      });
      
      res.end();
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const data = await readDatabase('./database.csv'); // Adjust path if needed
      const fieldData = data[major];
      
      if (fieldData) {
        res.status(200).send(`List: ${fieldData.join(', ')}`);
      } else {
        res.status(500).send('Cannot load the database');
      }
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}
