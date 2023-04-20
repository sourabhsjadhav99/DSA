
#1st question
inputs=input().split(" ")
arrLength=int(inputs[0])
number=int(inputs[1])
arr=input().split(" ")
count=0
for i in range(arrLength):
    if int(arr[i])==number:
        count=count+1
print(count)


#2nd question
inputs=input().split(" ")
noOfRows=int(inputs[0])
noOfcol=int(inputs[1])
arr_2d=[]
sum=0
for i in range(noOfRows):
    arr_2d.append(input().split(" "))
for i in range(noOfRows):
    for j in range(noOfcol):
        if int(arr_2d[i][j])%2 !=0:
            sum=sum+int(arr_2d[i][j])
print(sum)    