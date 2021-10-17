import Profile from './components/Profile';
import users from './users.json';

export default function App() {
  return (
    <div>
      {users.map(user => (
        <Profile
          key={user.id}
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
    </div>
  );
}
