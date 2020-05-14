# Print out each element of the following array on a separate line:
array1 = ['Joe', 2, 'Ted', 4.98, 14, 'Sam', 'void *', '42', 'float', 'pointers', 5006]

# MY ANS
print(*array1, sep = "\n") 

# first we set the array to a variable named arrray1
# then we print the array in list using the "*" and the separate operator assigned to a new line.  


# SECOND ATTEMPT

array2 = [ "\n", "", "NEWWW",'Joe', 2, 'Ted', 4.98, 14, 'Sam', 'void *', '42', 'float', 'pointers', 5006]

for i in range(len(array2)): 
    print (array2[i]), 

# first we set the array to a variable named arrray2
# then we then loop through the array from 0 to whatever the length of the array, len(array2) and print each of the individual element as a list, one on each line.  
