import { Dispatch, SetStateAction, useEffect } from 'react';
import {
  IoAttachOutline,
  IoBagOutline,
  IoCallOutline,
  IoFolderOpenOutline,
  IoPersonOutline,
  IoRocketOutline,
} from 'react-icons/io5';
import { menuList } from 'data';
import './Menu.scss';

interface MenuProps {
  activeTab: MenuId;
  setActiveTab: Dispatch<SetStateAction<MenuId>>;
}

function Menu({
  activeTab,
  setActiveTab,
}: MenuProps) {

  useEffect(() => {
    getOffsetMenuBorder(activeTab);
  }, [activeTab]);

  const getOffsetMenuBorder = (id: MenuId) => {
    const element = document.getElementById(id);
    const menu: HTMLUListElement | null = document.querySelector('.menu');
    if (!menu) return;
    const menuBorder: HTMLLIElement | null = menu.querySelector('.menu__border');
    if (!element) return;
    const offsetActiveItem = element.getBoundingClientRect();
    if (!menuBorder) return;
    const left = Math.floor(
      offsetActiveItem.left - menu.offsetLeft - (
        menuBorder.offsetWidth - offsetActiveItem.width
      ) / 2) + 'px';
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  const onChangeActiveTab = (id: MenuId) => {
    getOffsetMenuBorder(id);
    setActiveTab(id);
  };

  const getMenuIcon = (icon: number) => {
    switch (icon) {
    case 0:
      return <IoPersonOutline className="menu__icon" />;
    case 1:
      return <IoRocketOutline className="menu__icon" />;
    case 2:
      return <IoFolderOpenOutline className="menu__icon" />;
    case 3:
      return <IoCallOutline className="menu__icon" />;
    case 4:
      return <IoAttachOutline className="menu__icon" />;
    default:
      return <IoBagOutline className="menu__icon" />;
    }
  };

  const activeClass = (id: MenuId) =>
    activeTab === id ? ' active' : '';

  return (
    <div className="menu">
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5" >
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,
            9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,
            9.2-5.2,15.2-7c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,
            10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,
            5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1
            10.5c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
          </clipPath>
        </svg>
      </div>
      <ul className="menu__list">
        {menuList.map(({ id, icon, title }: MenuList) => (
          <li
            key={id}
            className={`menu__item${activeClass(id)}`}
            id={id}
            title={title}
          >
            <button
              className="menu__button"
              onClick={() => onChangeActiveTab(id)}
            >
              {getMenuIcon(icon)}
            </button>
          </li>
        ))}
        <li className="menu__border" />
      </ul>
    </div>
  );
}

export default Menu;
