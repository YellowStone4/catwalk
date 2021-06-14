import React, {useState, useEffect} from 'react';


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

  useEffect(() => {
    console.log('Props in StarSliders: ', props);
  });

  return (
    <div>
      <h3>StarSliders</h3>
      {comfort !== null &&
        <h4>Comfort: {props.metaData.characteristics.Comfort.value}</h4>
      }
      {fit !== null &&
        <h4>Fit: {props.metaData.characteristics.Fit.value}</h4>
      }
      {length !== null &&
        <h4>Length: {props.metaData.characteristics.Length.value}</h4>
      }
      {quality !== null &&
        <h4>Quality: {props.metaData.characteristics.Quality.value}</h4>
      }
      {width !== null &&
        <h4>Width: {props.metaData.characteristics.Width.value}</h4>
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