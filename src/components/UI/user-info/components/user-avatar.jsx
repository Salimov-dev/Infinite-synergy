import { styled } from "@mui/material";
import { generatePhotoNumber } from "../../../../utils/generate-photo-number";

const UserAva = styled(`img`)({
  width: "150px",
  borderRadius: "4px",
  marginBottom: "15px",
});
const UserAvatar = ({ user }) => {
  return (
    <UserAva
      role="button"
      src={
        user.src ||
        `https://randomuser.me/api/portraits/women/${generatePhotoNumber()}.jpg`
      }
      alt="Аватарка"
    />
  );
};

export default UserAvatar;
