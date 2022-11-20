import { users } from '../../data/users'
import * as S from './styles'

export function UserList() {
  return (
    <S.UserListContainer>
      {users.map((user) => (
        <S.UserListItem key={user.name}>
          <S.UserListItemContent>
            <img src={user.image} alt={user.name} />
            <span>{user.name}</span>
          </S.UserListItemContent>

          <strong>{user.note}</strong>
        </S.UserListItem>
      ))}
    </S.UserListContainer>
  )
}
