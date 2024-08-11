
import { test } from '@jest/globals';
const fs = require('node:fs');

describe("test", () => {
  
  beforeAll(async () => {
        
  });

    test('task 1', async () => {
      
        // Read the .csv file and extract the Breeds provided. Normalize the breed names by removing
        // all whitespacing and making them all lowercase. Lastly create a list of unique breeds without
        // duplicates.

        // a path where a file is stored
        let pathToFile = 'files/2017.csv'

        // fs - it's library for working with files
        let data = fs.readFileSync(pathToFile, 'utf8');

        let result = data.split('\r\n') // create array with list of stings
          .map(str => str.split(',')) // turn each string into a separate array
           .reduce((prev, curr) => { 
             let col2 = curr[1].replace(/\s/g, '').toLowerCase(); // Remove all whitespace and convert to lowercase
              if (!prev.includes(col2)) { // delete duplicates
                prev.push(col2); // create new array
              }
           return prev
           }, []);

      console.log(result);
    }, 120000);
  
    test('task 2', async () => {
      let pathToFile = 'files/2017.csv'

      let data = fs.readFileSync(pathToFile, 'utf8');
      let result = data.split('\r\n') // create array with list of stings
        .map(str => str.split(',')); // turn each string into a separate array

      function countLicensesByBreed(data) {
          const breedLicenseCounts = {};
        
          // to skip header row
          for (let i = 1; i < data.length; i++) {
            const licenseType = data[i][0]; // LicenseType is at index 0
            const breed = data[i][1]; // Breed is at index 1
        
            // check on dublicates
            if (!breedLicenseCounts[breed]) {
              breedLicenseCounts[breed] = {};
            }
        
            // Count the occurrence of this LicenseType for the breed
            if (breedLicenseCounts[breed][licenseType]) {
              breedLicenseCounts[breed][licenseType]++; // if item is already exist -> increase value on 1
            } else {
              breedLicenseCounts[breed][licenseType] = 1; // in any other case always will be 1
            }
          }
        
          // Convert breedLicenseCounts object to an array of objects [{ breed, counts }]
          const result = Object.keys(breedLicenseCounts).map(breed => ({
            breed: breed,
            counts: breedLicenseCounts[breed]
          }));
        
          return result;
        }
        
        // Call the function and log the result
        const licenseCountsByBreed = countLicensesByBreed(result);
        console.log(licenseCountsByBreed);
     
    }, 120000);
  
    test('task 3', async () => {
      let pathToFile = 'files/2017.csv'

      let data = fs.readFileSync(pathToFile, 'utf8');
      let result = data.split('\r\n') // create array with list of stings
        .map(str => str.split(',')); // turn each string into a separate array

      function findTopDogNames(data) {
          // Initialize an object to count occurrences of each dog name
          const nameCount = {};
        
          // Iterate over each data entry (skipping the header row)
          for (let i = 1; i < data.length; i++) {
            const dogName = data[i][3]; // DogName is at index 3
            if (nameCount[dogName]) {
              nameCount[dogName]++;
            } else {
              nameCount[dogName] = 1;
            }
          }
        
          // Convert nameCount object to an array of objects [{ name, count }]
          const nameCountArray = Object.keys(nameCount).map(name => ({
            name: name,
            count: nameCount[name]
          }));
        
          // Sort by count in descending order
          nameCountArray.sort((a, b) => b.count - a.count);
        
          // Select top 5 names or less if there are fewer than 5 unique names
          const topNames = nameCountArray.slice(0, 5);
        
          return topNames;
        }
        
        // Call the function and log the result
        const topDogNames = findTopDogNames(result);
        console.log(topDogNames);
    }, 120000);
  
    afterAll(async () => {
       
    });
});
