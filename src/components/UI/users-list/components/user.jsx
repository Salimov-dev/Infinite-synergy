import { Box, styled } from "@mui/system";
import { generatePhotoNumber } from "../../../../utils/generate-photo-number";

const Component = styled(Box)(({ selected }) => ({
  width: "100%",
  display: "flex",
  // flexDirection: "row-reverse",
  alignItems: "center",
  gap: "5px",
  padding: "0 15px",
  color: "rgba(94, 119, 147, 1)",
  cursor: "pointer",
  position: "relative",
  "&:hover": {
    color: "white",
    backgroundColor: "rgba(94, 119, 147, 1)",
  },
  "&::after": {
    position: "absolute",
    right: "13px",
    content: selected ? "''" : "none",
    width: "8px",
    height: "8px",
    backgroundColor: "yellow",
    borderRadius: "50%",
    boxShadow: "0px 3px 8px",
    visibility: selected ? "visible" : "hidden",
  },
}));

const UserAvatar = styled("img")({
  width: "22px",
  borderRadius: "50%",
});

const User = ({ user, onClick, selectedUserID }) => {
  const selected = user.id === selectedUserID;
  // console.log("user", user);

  return (
    <Component selected={selected} onClick={() => onClick(user.id)}>
      <UserAvatar
        role="button"
        src={
          user.src ||
          `https://randomuser.me/api/portraits/women/${generatePhotoNumber()}.jpg`
        }
        alt="Аватарка"
      />
      {user.firstName} {user.lastName}
    </Component>
  );
};

export default User;
