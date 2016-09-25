function valid(str){
    var stack=[];
    for(var i=0;i<str.length;i++){
        switch(str[i]){
            case '(':
            case '[':
            case '{':
                if ((stack.length==0) && i!=0) return false;//()() - не валидная
                stack.push(str[i]);
                break;
            case ')':
                if ((stack[stack.length-1]!='(')|| (stack.length==0)) return false;
                stack.pop();
                break;
            case '}':
                if ((stack[stack.length-1]!='{')|| (stack.length==0)) return false;
                stack.pop();
                break;
            case ']':
                if ((stack[stack.length-1]!='[') || (stack.length==0)) return false;
                stack.pop();
                break;
            default:
                break;
        }
    }
    return (stack.length==0)
}