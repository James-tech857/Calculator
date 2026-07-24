const inputField=document.getElementById('input');
const calculateNum=document.querySelectorAll('.calculateNumber');
const plusNum=document.getElementById('plusNumber');
const minusNum=document.getElementById('minusNumber');
const multiNum=document.getElementById('multiNumber');
const divideNum=document.getElementById('divisionNumber');
const removeAll=document.getElementById('removeAll');
const calculateTotal=document.getElementById('sumNumber');
const dot=document.getElementById('decimal');
const squareRoot=document.getElementById('squareRoot');
const percentage=document.getElementById('percentage');

function inputDisplay(){
// }
calculateNum.forEach(nums=> {
  nums.addEventListener('click',()=>{
    inputField.value+=(nums.textContent);
  })  
    })
  };
  inputDisplay();

  plusNum.addEventListener('click',()=>{
  inputField.value+="+";
  })

  minusNum.addEventListener('click',()=>{
  inputField.value+="-";
  })
  
  multiNum.addEventListener('click',()=>{
  inputField.value+="*";
  })

  divideNum.addEventListener('click',()=>{
  inputField.value+="/";
  })
  dot.addEventListener('click',()=>{
    inputField.value+=".";
  })

  squareRoot.addEventListener('click',()=>{
    inputField.value+="√";
  })

  percentage.addEventListener('click',()=>{
    inputField.value+="%";
  })
  
  calculateTotal.addEventListener('click',()=>{
    try{
    let mathInput=inputField.value.trim();
    if(!mathInput) return;
    mathInput = mathInput.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
    mathInput = mathInput.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
    mathInput = mathInput.replace(/(\d+)(?=Math\.sqrt|\()/g, "$1*");
    
    const result=new Function(`return ${mathInput}`)();
    
    if (isNaN(result) || result === Infinity) {
      inputField.value = "Error";
    } else {
      inputField.value = result;
    }
    
    // inputField.value=result;
    }catch(Error){
    inputField.value="Error"
    }
    
  })

  removeAll.addEventListener('click',()=>{
    inputField.value="";
  })
