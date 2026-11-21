var maximalRectangle = function(matrix) {
    if(!matrix|| matrix.length===0) return 0;
    let row=matrix.length, cols=matrix[0].length;
    const heights=new Array(cols).fill(0);
    let maxarea=0;
    for(let i=0; i<row; i++){
        for(let j=0; j<cols; j++){
            if(matrix[i][j]==='1'){
                heights[j]+=1;
            } else {
                heights[j]=0;
            }
        }
        maxarea=Math.max(maxarea,largeRectangleArea(heights));
    }
    return maxarea;
};
var largeRectangleArea=function(heights){
    let maxarea=0; const stack=[];
    for(let i=0; i<=heights.length; i++){
        let h=(i===heights.length)?0:heights[i];

        while(stack.length>0 &&h<heights[stack[stack.length-1]]){
            let height=heights[stack.pop()];
            let width=stack.length>0 ?i-stack[stack.length-1]-1:i;
            let area = height*width;
            maxarea=Math.max(maxarea,area);
        }
        stack.push(i);
    }
    return maxarea;
}