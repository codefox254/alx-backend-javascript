// 1-block-scoped.js
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true;  // block-scoped to this if block
    let task2 = false;  // block-scoped to this if block
  }

  return [task, task2];
}

