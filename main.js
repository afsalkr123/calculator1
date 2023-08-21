// display btn content in input box
function display(content) {
    result.value +=content
}
function resetresult() {
    result.value=""
}
function exprEval(){
    try{
        result.value = eval(result.value)
        
    }catch{
        result.value="invalid expression"
    }
}
function removelast() {
    result.value = result.value.slice(0,-1)
}