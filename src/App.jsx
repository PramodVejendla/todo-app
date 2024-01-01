import IconMoon from "./assets/images/icon-moon.svg";
import closeBtn from "./assets/images/icon-cross.svg";
import "./App.css";

const listStyles = "flex gap-2 p-2 border-b-2 border-gray-100 text-gray-500";
const list = "flex-1 text-start px-2 py-1 cursor-pointer ";
const closeBtnStyles = "w-3 h-3 mx-2";
const checkboxStyles =
  "cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500";

function App() {
  return (
    <div className=" pt-32">
      <div className="">
        <div className="flex justify-between align-middle text-white font-semibold text-xl tracking-widest pb-8">
          <h1 className="text-3xl">TODO</h1>
          <img src={IconMoon} alt="nightmodebtn" className="w-8 h-8 p-1" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Currently Typing"
            className="min-w-128  py-3 px-4 mb-4 rounded "
          />
        </div>
        <div className="bg-white rounded px-4 pt-2">
          <div>
            <ul>
              <div className={listStyles}>
                <input type="checkbox" className={checkboxStyles} />
                <li className={list}>Complete online React course</li>
                <button>
                  <img
                    src={closeBtn}
                    alt="closeBtn"
                    className={closeBtnStyles}
                  />
                </button>
              </div>
              <div className={listStyles}>
                <input type="checkbox" className={checkboxStyles} />
                <li className={list}>10 minutes meditation</li>
                <button>
                  <img src={closeBtn} className={closeBtnStyles} />
                </button>
              </div>
              <div className={listStyles}>
                <input type="checkbox" className={checkboxStyles} />
                <li className={list}>Read for 1 hour</li>
                <button>
                  <img src={closeBtn} className={closeBtnStyles} />
                </button>
              </div>
              <div className={listStyles}>
                <input type="checkbox" className={checkboxStyles} />
                <li className={list}>Pickup groceries</li>
                <button>
                  <img src={closeBtn} className={closeBtnStyles} />
                </button>
              </div>
              <div className={listStyles}>
                <input type="checkbox" className={checkboxStyles} />
                <li className={list}>Jog around the park 3x</li>
                <button>
                  <img src={closeBtn} className={closeBtnStyles} />
                </button>
              </div>
            </ul>
          </div>
          <div className="flex text-xs justify-between p-2 text-gray-600">
            <div>
              <p className="text-gray-400">5 items left</p>
            </div>
            <div className="flex gap-2 ">
              <button className="text-blue-700 ">All</button>
              <button className="text-blue-700 ">Active</button>
              <button className="text-gray-400 ">Completed</button>
            </div>
            <div>
              <button>Clear Completed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
