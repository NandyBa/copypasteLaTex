# copypasteLaTex

Code Javascript permettant de formater les codes provenant de Latex.

Enlève les nombres en début de ligne, supprime les espaces inutiles et remplace des guillemets pour que le code ainsi formatté soit direment utilisable.

[Utiliser le script](https://nandyba.github.io/copypasteLaTex/)

## Exemple:

<ins>Avant</ins>

    1 incoming ( req , res , cb ) {
    2 res . endStatus (200) ;
    3 // Extract the body of the POST request
    4 if ( req. body . object === ’page ’ && req . body . entry ) {
    5 let data = req . body ;
    6 // for on page objects
    7 // for on messageObj s if messaging of each page
    exists
    8 if( messageObj . postback ) {
    9 // handle postbacks
    10 }
    11 else {
    12 // handle messages
    13 }
    14 }
    15 }

<ins>Après</ins>

    incoming(req , res , cb){
    res.endStatus(200);
    // Extract the body of the POST request
    if(req.body.object ==='page'&& req.body.entry){
    let data = req.body ;
    // for on page objects
    // for on messageObj s if messaging of each page
    exists
    if(messageObj.postback){
    // handle postbacks
    }
    else {
    // handle messages
    }
    }
    }


Il ne reste plus qu'à indenter le code

    incoming(req , res , cb){
      res.endStatus(200);
      // Extract the body of the POST request
      if(req.body.object ==='page'&& req.body.entry){
        let data = req.body ;
        // for on page objects
        // for on messageObj s if messaging of each page exists
        if(messageObj.postback){
          // handle postbacks
        }
        else {
          // handle messages
        }
      }
    }

