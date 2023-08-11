import { mainStackLeftSide, mainStackRightSide } from 'data';
import './MainStack.scss';

function MainStack() {

  const getGradeIcon = (grade: 1 | 2 | 3 | 4 | 5) => {
    switch (grade) {
    case 1:
      return '😞';
    case 2:
      return '😕';
    case 3:
      return '😐';
    case 4:
      return '🙂';
    case 5:
      return '😎';
    default:
      return '😐';
    }
  };

  return (
    <div className="main-stack">
      <ul className="main-stack__list">
        {mainStackLeftSide.map((item: StackItem) => (
          <li key={item.id} className="main-stack__list-item">
            <p className="main-stack__list-item-text">
              {getGradeIcon(item.grade)}
            </p>
            <p className="main-stack__list-item-text">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
      <ul className="main-stack__list">
        {mainStackRightSide.map((item: StackItem) => (
          <li key={item.id} className="main-stack__list-item">
            <p className="main-stack__list-item-text">
              {getGradeIcon(item.grade)}
            </p>
            <p className="main-stack__list-item-text">
              {item.title}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainStack;
