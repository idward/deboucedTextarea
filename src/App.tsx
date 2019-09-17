import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import DebouncedTextarea from "./components/debouncedTextarea/DebouncedTextarea";
import "./App.css";

interface ItemType {
  itemValue: string;
}

interface ItemData {
  [key: string]: ItemType;
}

const defaultItems: ItemData = {
  a111: {
    itemValue: ""
  },
  b222: {
    itemValue: ""
  }
};

const App: React.FC = () => {
  const [items, setItems] = useState(defaultItems);

  const onChangeHandle = (value: string, code: string) => {
    const item = { itemValue: value };
    const newItems: ItemData = { ...defaultItems, [code]: item };
    setItems(newItems);
  };

  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link> &nbsp;&nbsp;
        <Link to="/wow">Wow</Link>
      </header>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <h1>Home page</h1>
              <div>
                <textarea></textarea>
              </div>
              {Object.keys(items).map(itemKey => {
                return (
                  <div key={itemKey}>
                    <DebouncedTextarea
                      value={items[itemKey].itemValue}
                      itemIndex={itemKey}
                      onChangeHandle={onChangeHandle}
                    />
                  </div>
                );
              })}
            </div>
          )}
        />
        <Route
          path="/wow"
          render={() => (
            <div>
              <h1>Wow Page</h1>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
