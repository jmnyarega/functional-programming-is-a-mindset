### Notes

 - [ ] Shallow copies only duplicate the top-level data structure of nested
       data. For instance, if you have an array of objects, a shallow copy will
       only duplicate the array. The objects inside will be shared with both
       the original and the copy of the array. We will compare shallow and deep
       copies later on. 

- [ ] When two pieces of nested data share some of their references, it is
      called structural shar- ing. When it’s all immutable, structural sharing
      is very safe. Structural sharing uses less memory and is faster than
      copying everything.
