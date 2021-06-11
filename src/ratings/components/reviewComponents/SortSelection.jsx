import React, {useState, useEffect} from 'react';

const SortSelection = (props) => {
  const [sorter, setSorter] = useState('relevance');

  const handleChange = (event) => {
    setSorter(event.target.value)
    props.changeSort(event.target.value);
  }



  return (
    <div>
      <form>
        <label>

          <select value={sorter} onChange={handleChange}>
            <option value="relevant">relevant</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </label>
      </form>

    </div>

  );
}

export default SortSelection;