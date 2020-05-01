import * as React from 'react'
import { view } from 'react-easy-state'
import todoStore from 'stores/todoStore'

import * as css from './Home.scss'

export default view(() => {
  const { items, create, remove, fetchItems } = todoStore
  return (
    <div className={css.container} >
      <div className={css.title}>Home Page</div>
      <div className={[css.mozColumns].join(' ')}>
        <div className={[css.column, css.isOneFifth].join(' ')} >
          <button className={[css.button, css.isFullwidth].join(' ')} data-fetch onClick={fetchItems}>
            Fetch API
      </button>
        </div>
        <div className={[css.column, css.isOneFifth].join(' ')} >
          <button className={[css.button, css.isFullwidth].join(' ')} data-add onClick={create}>
            ＋ Add Item
      </button>
        </div>
      </div>
      <div className={[css.mozColumns].join(' ')}>
        <ul className={[css.column, css.isTwoFifths].join(' ')} >
          {items &&
            items.map((item, idx) => (
              <li className={[css.media].join(' ')} key={idx}>
                <span className={[css.mediaContent].join(' ')}>{item.title}{' '}</span>
                <button 
                    className={[css.delete, css.mediaRight].join(' ')} 
                    data-remove onClick={() => remove(idx)}>
              </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
})
