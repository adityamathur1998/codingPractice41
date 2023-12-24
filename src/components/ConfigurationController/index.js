// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        onToggleShowContent,
        showLeftNavbar,
        onToggleShowLeftNavbar,
        showRightNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controls-container">
          <div className="responsive-controls-container">
            <h1 className="layout-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="checkbox-container">
                <input
                  checked={showContent}
                  onChange={onChangeContent}
                  type="checkbox"
                  id="content"
                />
                <label htmlFor="content" className="label-text">
                  Content
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showLeftNavbar}
                  onChange={onChangeLeftNavbar}
                  id="leftNavbar"
                  type="checkbox"
                />
                <label htmlFor="leftNavbar" className="label-text">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-container">
                <input
                  checked={showRightNavbar}
                  onChange={onChangeRightNavbar}
                  id="rightNavbar"
                  type="checkbox"
                />
                <label htmlFor="rightNavbar" className="label-text">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
