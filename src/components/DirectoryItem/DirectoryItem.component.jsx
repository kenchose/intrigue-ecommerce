import { useNavigate } from "react-router-dom";

import * as sc from "./DirectoryItem.styles";

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();

  const { title, imageUrl, route } = category;
  const onNavigateHandler = () => navigate(route);

  return (
    <sc.DirectoryItemContainer onClick={onNavigateHandler}>
      <sc.DirectoryImage imageUrl={imageUrl} />
      <sc.Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </sc.Body>
    </sc.DirectoryItemContainer>
  );
};

export default DirectoryItem;
