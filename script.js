function test(states) {
  let cont = 1;

  function loop() {
      if (cont == 9) {
          document.getElementById("log").innerHTML += "<br>Proceso finalizado: La maquina esta en resposo";
          return;
      }

      var location = states[0];
      var state = states[0] == "A" ? states[1] : states[2];
      var action_result = reflex_agent(location, state);

      document.getElementById("log").innerHTML += "<br>Location: ".concat(location).concat(" | Action: ").concat(action_result).concat(" | Estado: ").concat(cont);
      if (cont == 5) {
          //ensuciamos para que recorrar los estados
          states[1] = "DIRTY";
          states[2] = "DIRTY";
          location = "B"
      }
      if (action_result == "CLEAN") {
          if (location == "A") states[1] = "CLEAN";
          else if (location == "B") states[2] = "CLEAN";
      } else if (action_result == "RIGHT") states[0] = "B";
      else if (action_result == "LEFT") states[0] = "A";

      cont += 1;
      setTimeout(loop, 2000); // Schedule the next iteration
  }

  loop(); // Start the loop
}

var states = ["A","DIRTY","DIRTY"];
test(states);