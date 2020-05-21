 
   window.onload = loadRankings;

    //const rankingsBody = document.querySelector("#rankings-table > tbody");
    const body = document.querySelector("div");

    function loadRankings() {

      const request = new XMLHttpRequest();
      const request2 = new XMLHttpRequest();

      request.open("get", "data/rankings.json", true);
      request.onload = () => {

        try {
          const universites = JSON.parse(request.responseText);

          request2.open("get", "data/activities.json", true);
          request2.onload = () => {
            const activities = JSON.parse(request2.responseText);

            populateRankings(universites, activities);
          };
          request2.send();

        } catch (e) {


          console.warn("Could not load");

        }

      };
      request.send();

    }

    function populateRankings(u, a) {
      let tables = [];
      
      for(let i = 0; i < Country.name.length; i++){
        tables[i] = generateTable(Country.name[i]);
      }
      
      for (let i = 0; i < u.length; i++) {
        let uni = new University(u[i].name, u[i].country, u[i].person);
        let acts = [];

        for (let j = 0; j < u[i].activities.length; j++) {

          for(let k = 0; k < a.length; k++){
            let act = new Activity(a[k].name);

            if (u[i].activities[j] == act.getActivityName()) {
              acts.push(act);

              break;
            }
          }
        }

        uni.setActivity(acts);

        //Classification based on country [Logic]
        
        for(let k = 0; k < Country.name.length; k++){
            if(uni.getCountry() == tables[k].id){
                generateRecord(uni, i+1, tables[k]);
            }
        }
        
        
        console.log(uni);
      }
    }

    function generateTable(country){
      const head = document.createElement("h2");
      const table = document.createElement("table");
      table.id = country;
      table.className = "content-table";
      const tbody = document.createElement("tbody");
      const br = document.createElement("br");
      
      const header = document.createElement("thead");
      const h_row = document.createElement("tr");
      const number = document.createElement("td");
      const name = document.createElement("td");
      const in_charge = document.createElement("td");
      const activities = document.createElement("td");
      
      const head_text=document.createTextNode(country);
      const number_text = document.createTextNode("No");
      const name_text = document.createTextNode("Name");
      const in_charge_text = document.createTextNode("In-Charge");
      const activities_text = document.createTextNode("Actvities");
      
      number.appendChild(number_text);
      name.appendChild(name_text);
     
      in_charge.appendChild(in_charge_text);
      activities.appendChild(activities_text);

      h_row.appendChild(number);
      h_row.appendChild(name);
      h_row.appendChild(in_charge);
      h_row.appendChild(activities);

      header.appendChild(h_row);
      head.appendChild(head_text);
      table.appendChild(header);
      table.appendChild(tbody);

      body.appendChild(br);
      body.appendChild(head);
      body.appendChild(table); 

      return table;
    }
    
    function generateRecord(university, index, country = null){
      const i = country.querySelectorAll("tr").length;

      const record = document.createElement("tr");
      const number = document.createElement("td");
      const name = document.createElement("td");
      const in_charge = document.createElement("td");
      const activities = document.createElement("td");

      const number_text = document.createTextNode(i);
      const name_text = document.createTextNode(university.getUniversityName());
      const in_charge_text = document.createTextNode(university.getPersonInCharge());
      const activities_text = document.createTextNode(university.activitiesToString());
      
      number.appendChild(number_text);
      name.appendChild(name_text);
     
      in_charge.appendChild(in_charge_text);
      activities.appendChild(activities_text);

      record.appendChild(number);
      record.appendChild(name);
      record.appendChild(in_charge);
      record.appendChild(activities);

      //rankingsBody.appendChild(record);

      if(country){
        country.querySelector("tbody").appendChild(record);
      }
    }



    