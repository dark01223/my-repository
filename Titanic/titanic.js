async function populate(){

    const requestURL = "https://dark01223.github.io/my-repository/csvjson.json"; // gli viene assegnato un link 

    const request = new Request(requestURL) // crea un nuovo oggetto

    const response = await fetch(request); // 
    
    const titanicPeople = await response.json(); //

    populatePeople(titanicPeople);


}

function populatePeople(obj){ 
    
    for(i = 0; i <= obj.length; i++){  
 
        addElement(obj[i]); // richiamo la funzione addElement passando il vettore I-esimo
    
    }
}

function addElement(obj){ 

    const newDiv = document.createElement('div');  // crea un elemento DIV che sarà il contenitore
    const newH2 = document.createElement('h2');
    const newUl = document.createElement('ul');
    const newLi1 = document.createElement('li');
    const newLi2 = document.createElement('li');
    const newLi3 = document.createElement('li');
    const newLi4 = document.createElement('li');
    const newLi5 = document.createElement('li');

    newDiv.setAttribute("id", "card");  // assegno la card all'attributo ID per assegnarlo allo Style.css

    newH2.textContent = obj.Name;  // assegna i valori ai rispettivi elementi creati
    newLi1.textContent = `Ha : ${obj.Age} anni`; 
    
  

    if(obj.Survived == 0){   // funzione IF che controlla il valore di Survived e assegna il rispettivo valore

        newLi2.textContent = "Non è sopravvissuto";
    }else{

        newLi2.textContent = "É Sopravvissuto";
    };

    if(obj.Sex == "male"){   // funzione IF che controlla il valore di Sex e assegna il rispettivo valore

        newLi3.textContent = "Maschio";
    }else{

        newLi3.textContent = "Femmina";
    }


    newLi4.textContent = `Il passeggero era in ${obj.Pclass}^ classe`; 


    if(obj.Embarked == "S"){   // funzione IF che controlla il valore di Sex e assegna il rispettivo valore

        newLi5.textContent = "Southampton";
    }else if(obj.Embarked == "C"){

        newLi5.textContent = "Cherbourg";
    }else{

        newLi5.textContent = "Cobh";

    }



    newDiv.append(newH2, newUl);  // appen serve per attaccare H2 e UL al nuovo DIV creato
    newUl.appendChild(newLi1);  
    newUl.appendChild(newLi2);
    newUl.appendChild(newLi3);
    newUl.appendChild(newLi4);
    newUl.appendChild(newLi5);
    document.body.append(newDiv);  // attacca il DIV creato al Body

}

populate();
