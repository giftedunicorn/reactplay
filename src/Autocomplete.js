import React from 'react';
// import classnames from 'classnames';
// you should import `lodash` as a whole module
// import lodash from 'lodash';
// import axios from 'axios';

const ITEMS_API_URL = 'http://localhost:3000/api/items';
const DEBOUNCE_DELAY = 500;

function axios(config) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = Array(10).fill(0)
      for (let index in res) {
        res[index] = Math.random() * 1000
      }
      resolve({
        data: res,
      })
    }, Math.random()*1000)
  })
}

function useDebounce(fn, delay, dep = []) {
  // current is like a persist object, like "this"
  // we will save fn and timer in this current object
  const { current } = React.useRef({ fn, timer: null });
  React.useEffect(() => {
    // fn is different in every rendering, we need to update fn in current object
    current.fn = fn;
  }, [fn]);

  // use useCallback to make sure return the same fn every rendering
  return React.useCallback((...args) => {
    clearTimeout(current.timer);
    current.timer = setTimeout(() => {
      current.fn.apply(this, args);
    }, DEBOUNCE_DELAY);
  }, dep)
}

// the exported component can be either a function or a class
export default function Autocomplete(props) {
  let [input, setInput] = React.useState('')
  let [isLoading, setIsLoading] = React.useState(false)
  let [results, setResults] = React.useState([])

  const request = function() {
    if (!input) return

    setIsLoading(true)
    setResults([])

    axios({
      method: 'GET',
      url: `${ITEMS_API_URL}?q=${input}`,
    }).then((res) => {
      console.log(input, res.data)
      setResults(res.data)
      setIsLoading(false)
    }).catch((err) => {
      console.error(err)
      setIsLoading(false)
    })
  }

  const debouncedRequest = useDebounce(request)
  React.useEffect(() => {
    debouncedRequest()
  }, [input])

  const handleOnSelect = function(item) {
    props.onSelectItem(item)
  }

  const handleOnChnage = function(e) {
    setInput(e.target.value)
  }

  const inputWrapperClassName = isLoading ? "control is-loading" : "control"
  return (
    <>
      <div className="wrapper">
        <div className={inputWrapperClassName}>
          <input type="text" className="input" onChange={handleOnChnage} value={input}/>
        </div>
        {input && results.length !== 0 && <div className="list is-hoverable">
          {results.map((item, index) => {
            return (
              <a key={item} className="list-item" onClick={() => handleOnSelect(item)}>
                {item}
              </a>
            )
          })}
        </div>}
      </div>
      <style>{`
          .list-item {
            display: block;
          }
      `}
      </style>
    </>
  );
}
