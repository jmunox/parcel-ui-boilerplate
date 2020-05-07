import * as React from 'react'
import { Route, Link as RouterLink } from 'react-router-dom'
import {Link as RebassLink} from 'rebass'

import * as css from './AppMenu.scss'

const AppMenu = () => (
  <nav className={css.main}>
    [App Menu]
    <ul>
      <ListItemLink label="Home" to="/" />
      <ListItemLink label="Contact Us" to="/contact-us" />
    </ul>
  </nav>
)

const ListItemLink = ({ label, to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li className={match ? 'active' : ''}>
        <RebassLink { ...{ to, rest}}
        as={RouterLink}>
          {label}
        </RebassLink>
      </li>
    )}
  />
)

export default AppMenu