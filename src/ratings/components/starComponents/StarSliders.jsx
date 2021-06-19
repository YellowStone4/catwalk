import React, {useState, useEffect} from 'react';
import Slider from './Slider.jsx';

const StarSliders = (props) => {

  const [charsList, setCharsList] = useState([]);
  const [charObj, setCharObj] = useState({});

  const [comfort, setComfort] = useState(false);
  const [fit, setFit] = useState(false);
  const [length, setLength] = useState(false);
  const [quality, setQuality] = useState(false);
  const [width, setWidth] = useState(false);

  useEffect(() => {
    if (props.metaData.characteristics !== undefined) {
      var theseChars = [];
      for (var key in props.metaData.characteristics) {
        if (props.metaData.characteristics[key] !== null) {
          theseChars.push(key);
        }
      }
      setCharsList(theseChars);
    }

  }, [props.metaData]);

  useEffect(() => {
    if (charsList.length) {

      var charObjectList = {};
        for (var i = 0; i < charsList.length; i++) {
          if (props.metaData.characteristics[charsList[i]] !== undefined) {
            charObjectList[charsList[i]] = props.metaData.characteristics[charsList[i]].value;
          }
        }
        setCharObj(charObjectList);
    }
  }, [charsList]);


  const h4Style = {
    margin: '10px auto',
    position: 'relative',
    textAlign: 'center',
    color: '#343f56'
  }

  return (
    <div style={{width: '60%', marginLeft: '5px', left: '8.5%', position: 'relative'}}>
      {charObj.Comfort > 0 &&
      <div>
        <h4 style={h4Style}>Comfort</h4>
        <Slider val={charObj.Comfort}/>
      </div>
      }
      {charObj.Fit > 0 &&
      <div>
        <h4 style={h4Style}>Fit</h4>
        <Slider val={charObj.Fit}/>
      </div>
      }
      {charObj.Length > 0 &&
      <div>
        <h4 style={h4Style}>Length</h4>
        <Slider val={charObj.Length}/>
      </div>
      }
      {charObj.Quality > 0 &&
      <div>
        <h4 style={h4Style}>Quality</h4>
        <Slider val={charObj.Quality}/>
      </div>
      }
      {charObj.Width > 0 &&
      <div>
        <h4 style={h4Style}>Width</h4>
        <Slider val={charObj.Width}/>
      </div>
      }

    </div>
  )
}

export default StarSliders;

/*
Comfort: {id: 64061, value: "3.2727272727272727"}
Fit: {id: 64059, value: "2.8409090909090909"}
Length: {id: 64060, value: "2.7272727272727273"}
Quality: {id: 64062, value: "3.0000000000000000"} */