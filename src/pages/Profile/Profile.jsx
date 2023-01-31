import { getCookie } from "../../utils/cookie";
import {
  Container,
  Image,
  Name,
  NameDetails,
  ProfileWrapper,
  TableContainer,
} from "./styles";

const Profile = () => {
  return (
    <ProfileWrapper>
      <Container>
        <NameDetails>
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="profile"
          />
          <Name>{JSON.parse(getCookie("userDetails")).username}</Name>
        </NameDetails>
        <TableContainer>
          <div>
            <h3>Order Details</h3>

            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Berglunds snabbköp</td>
                <td>Christina Berglund</td>
                <td>Sweden</td>
              </tr>
              <tr>
                <td>Centro comercial Moctezuma</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </table>
          </div>

          <div>
            <h3>Shipping Details</h3>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </table>
          </div>
          <div>
            <h3>Payment Details</h3>
            <table>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </table>
          </div>
        </TableContainer>
      </Container>
    </ProfileWrapper>
  );
};

export default Profile;
