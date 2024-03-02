const fs = require('fs');

// File path
const filePath = 'data.txt';

// Function to create a new record
const createRecord = (data) => {
  fs.writeFile(filePath, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log('Record created successfully!');
  });
};

// Function to read data from file
const readData = () => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data read from file:', JSON.parse(data));
  });
};

// Function to update existing record
const updateRecord = (updatedData) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const existingData = JSON.parse(data);
    const newData = { ...existingData, ...updatedData };
    fs.writeFile(filePath, JSON.stringify(newData), (err) => {
      if (err) throw err;
      console.log('Record updated successfully!');
    });
  });
};


// Example usage
const dataToCreate = { name: 'John', age: 30, city: 'New York' };
createRecord(dataToCreate);

readData();

const updatedData = { age: 31 };
updateRecord(updatedData);

deleteRecord();

// Function to delete record
const deleteRecord = () => {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Record deleted successfully!');
    });
  };