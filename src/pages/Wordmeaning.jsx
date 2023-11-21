import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Wordmeaning() {
  const [words, setWords] = useState();
  const params = useParams();
  const wordparam = params.word;
  console.log("PARAM WORD:", wordparam);
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordparam}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const newData = await response.json();
      //console.log("DATA FROM URL:",data);
      setWords(newData);
    };
    fetchData();
  }, [params]);

  function play (){
    new Audio(words[0].phonetics[0].audio).play();
    
  }

  if (Array.isArray(words)) {
    console.log(words);
    return (
      <div>
        <div className="pronunce-div">
        <div>
          <p className="pronounce">
            {words[0].phonetics[0].text}</p>
        </div>
        <div className="image-div">
            <img className="audioicon" src="https://cdn-icons-png.flaticon.com/512/5525/5525053.png" onClick={play}/>
          
        </div>
        </div>
        <div>
          <p className="definition-p">{words[0].meanings[0].definitions[0].definition}</p>
        </div>
      </div>
    );
  } else {
    return <div className="noword-div">No such a word</div>;
  }
 
}

export default Wordmeaning;
