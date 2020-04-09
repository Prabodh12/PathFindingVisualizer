
function isEqual(finish, node) {
    for (var i = 0; i < finish.length; i++) {
        if (finish[i] != node[i]) {
            return true;
        }
    }
    return false;
}

function DFS(row, column, node, visited, finish, animation, path, dist) {
    var s = [node];
    //console.log(node,finish)
    path[node[0]][node[1]] = null;
    dist[node[0]][node[1]] = 0;
    //var check = 0;
    while (!isEqual(finish, node)) {
        // console.log("QUEUE:",q)
        node = s.pop()
        animation.push(node);
        //console.log(visited)
        if (node == undefined) {
            break
        }
       // while (q.length) {
            if (visited[node[0]][node[1]] == 0) {
                if (node[0] + 1 >= 0 && node[0] + 1 < row && visited[node[0] + 1][node[1]] == 0) {
                    s.push([node[0] + 1, node[1]])
                    dist[node[0]+1][node[1]]=dist[node[0]][node[1]]+1
                    path[node[0]+1][node[1]]=[node[0],node[1]]
                }
                if (node[1] + 1 >= 0 && node[1] + 1 < column && visited[node[0]][node[1] + 1] == 0) {
                    s.push([node[0], node[1] + 1])
                    dist[node[0]][node[1]+1]=dist[node[0]][node[1]]+1
                    path[node[0]][node[1]+1]=[node[0],node[1]]
                }
                if (node[0] - 1 >= 0 && node[0] - 1 < row && visited[node[0] - 1][node[1]] == 0) {
                    s.push([node[0] - 1, node[1]])
                    dist[node[0]-1][node[1]]=dist[node[0]][node[1]]+1
                    path[node[0]-1][node[1]]=[node[0],node[1]]
                }
                if (node[1] - 1 >= 0 && node[1] - 1 < column && visited[node[0]][node[1] - 1] == 0) {
                    s.push([node[0], node[1] - 1])
                    dist[node[0]][node[1]-1]=dist[node[0]][node[1]]+1
                    path[node[0]][node[1]-1]=[node[0],node[1]]
                }
                visited[node[0]][node[1]] = 1

            }
    }
    console.log(path)
    var curr = path[finish[0]][finish[1]];
    //console.log(curr.length)
    var ans = [[finish[0],finish[1]]];
    while(curr!=null && curr.length!=0){
        
        //console.log(curr)
        if(curr!=null && curr.length!=0){
            ans.push(curr)
            console.log("aya")
            curr = path[curr[0]][curr[1]]
        }
        
        
    }
    return ans
}

function DFSSearch(rows, column, start, finish, wall) {
    var visited = [];
    var path = [];
    var dist = [];
    var animation = [];
    for (var i = 0; i < rows; i++) {
        var temp = [];
        for (var j = 0; j < column; j++) {
            temp.push(0)
        }
        visited.push(temp);
    }
    for (var i = 0; i < rows; i++) {
        var temp = [];
        for (var j = 0; j < column; j++) {
            temp.push([])
        }
        path.push(temp);
    }
    for (var i = 0; i < rows; i++) {
        var temp = [];
        for (var j = 0; j < column; j++) {
            temp.push(Number.POSITIVE_INFINITY)
        }
        dist.push(temp);
    }
    for(var i=0;i<wall.length;i++){
        visited[wall[i][0]][wall[i][1]]=1
    }
    //console.log(path)
    var ans = DFS(rows, column, start, visited, finish, animation, path, dist);
    return [animation,ans]
    // console.log(animation);
}
// var start = [0, 0]
// var finish = [0, 3]
// DFSSearch(5, 5, start, finish)
//console.log(visited)
// s = [3, 1];
// finish = [3, 2];