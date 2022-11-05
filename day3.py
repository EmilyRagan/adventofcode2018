f = open("day3_input.txt", "r")
lines = f.read().split('\n')
fabric = []
for line in lines:
    parts = line.split(' @ ')
    id = parts[0]
    data = parts[1].split(': ')
    coords = data[0].split(',')
    dimensions = data[1].split('x')
    x = int(coords[0])
    y = int(coords[1])
    width = int(dimensions[0])
    length = int(dimensions[1])
    # start at x,y
    # loop for length iterations
    # add one for width iterations
    if (fabric.__len__() < x + width):
        for i in range(fabric.__len__(), x + width):
            fabric.append([])
    for i in range(x, x + width):
        if (fabric[i].__len__() < y + length):
            for j in range(fabric[i].__len__(), y + length):
                fabric[i].append('.')
        for j in range(y, y + length):
            if fabric[i][j] == '.':
                fabric[i][j] = id
            else:
                fabric[i][j] = 'X'

count = 0
for x in range(0, fabric.__len__()):
    for y in range(0, fabric[x].__len__()):
        if fabric[x][y] == 'X':
            count += 1
print(count)