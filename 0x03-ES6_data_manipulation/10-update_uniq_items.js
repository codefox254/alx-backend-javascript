def updateUniqueItems(items):
    if not isinstance(items, dict):
        raise ValueError("Cannot process")
    
    for key, value in items.items():
        if value == 1:
            items[key] = 100
    
    return items
