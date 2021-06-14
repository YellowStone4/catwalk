import React, {useState, useEffect} from 'react';
import Slider from './Slider.jsx';

const StarSliders = (props) => {

  const [comfort, setComfort] = useState(null);
  const [fit, setFit] = useState(null);
  const [length, setLength] = useState(null);
  const [quality, setQuality] = useState(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (props.metaData.characteristics !== undefined) {
      if (Object.keys(props.metaData.characteristics).includes('Comfort')) {
        setComfort(props.metaData.characteristics.Comfort);
      }
    };
  }, [props.metaData]);

  useEffect(() => {
    if (props.metaData.characteristics !== undefined) {
      if (Object.keys(props.metaData.characteristics).includes('Fit')) {
        setFit(props.metaData.characteristics.Fit);
      }
    };
  }, [props.metaData]);

  useEffect(() => {
    if (props.metaData.characteristics !== undefined) {
      if (Object.keys(props.metaData.characteristics).includes('Length')) {
        setLength(props.metaData.characteristics.Length);
      }
    };
  }, [props.metaData]);

  useEffect(() => {
    if (props.metaData.characteristics !== undefined) {
      if (Object.keys(props.metaData.characteristics).includes('Quality')) {
        setQuality(props.metaData.characteristics.Quality);
      }
    };
  }, [props.metaData]);

  useEffect(() => {
    if (props.metaData.characteristics !== undefined) {
      if (Object.keys(props.metaData.characteristics).includes('Width')) {
        setWidth(props.metaData.characteristics.Width);
      }
    };
  }, [props.metaData]);

  const h4Style = {
    margin: '0 auto',
    position: 'relative'
  }



  return (
    <div>
      {comfort !== null &&
        <div>
          <h4 style={h4Style}>Comfort</h4>
          <Slider val={props.metaData.characteristics.Comfort.value}/>
        </div>
      }
      {fit !== null &&
        <div>
          <h4>Fit</h4>
          <Slider val={props.metaData.characteristics.Fit.value}/>
        </div>
      }
      {length !== null &&
        <div>
          <h4>Length</h4>
          <Slider val={props.metaData.characteristics.Length.value}/>
        </div>
      }
      {quality !== null &&
        <div>
          <h4>Quality</h4>
          <Slider val={props.metaData.characteristics.Quality.value}/>
        </div>
      }
      {width !== null &&
        <div>
          <h4>Width</h4>
          <Slider val={props.metaData.characteristics.Width.value}/>
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