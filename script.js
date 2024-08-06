// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function test(states){
    let cont = 1
    while (true){
      if (cont==9){
        document.getElementById("log").innerHTML+="<br>Proceso finalizado: La maquina esta en resposo";
        break;
      }

      var location = states[0];		
      var state = states[0] == "A" ? states[1] : states[2];
      var action_result = reflex_agent(location, state);
      
      document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado: ").concat(cont);
      if(cont == 5){
        //ensuciamos para que recorrar los estados
        states[1] = "DIRTY";
        states[2] = "DIRTY";  
        location = "B"
      }
      if (action_result == "CLEAN"){
        if (location == "A") states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN";
      }
      else if (action_result == "RIGHT") states[0] = "B";
      else if (action_result == "LEFT") states[0] = "A";		
      cont += 1
      setTimeout(2000)
    }
}

var states = ["A","DIRTY","DIRTY"];
test(states);