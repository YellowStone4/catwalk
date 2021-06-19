import React, {useState, useEffect} from 'react';

const SortSelection = (props) => {
  const [sorter, setSorter] = useState('relevance');

  const handleChange = (event) => {
    setSorter(event.target.value)
    props.changeSort(event.target.value);
  }


  const select = {
    'appearance': 'none',
    'border': 'none',
    /* needed for Firefox: */
    'overflow': 'hidden',
    textDecoration: 'underline',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fontWeight: 'bold',
    fontFamily: 'Lato',
    fontSize: '18px',
    textShadow:'2px 7px 1px rgb(251, 147, 0)',
    color:'rgb(52, 63, 86)'

  }


  return (

      <form style={{display: 'inline'}}>
        <label>
          <select style={select} value={sorter} onChange={handleChange}>
            <option style={select} value="relevant">relevance</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </label>
      </form>



  );
}

export default SortSelection;