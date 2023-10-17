import { User } from 'next-auth';
import Image from 'next/image';

import { Avatar, AvatarFallback } from './ui/avatar';

type UserAvatarProps = {
  user: Pick<User, 'name' | 'image'>;
};

export default function UserAvatar({ user }: UserAvatarProps) {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative aspect-square h-full w-full">
          <Image
            fill
            src={user.image}
            alt="User profile image"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <AvatarFallback>
          <span className="sr-only">{user.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
}