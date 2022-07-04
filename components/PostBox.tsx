import { useSession } from 'next-auth/react';
import React from 'react';
import Avatar from './Avatar';

const PostBox = () => {

    const {data: session } = useSession()

  return (
    <form className="sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2">
        <div className="flex items-center space-x-3">
            {/* Avatar */}
            <Avatar />
            <input
                className='flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none'
                disabled={!session}
                type="text"
                placeholder={
                    session ? 'Create a post by entering a Title' : 'Sign In to Post'
                }
            />
        </div>
    </form>
  )
}

export default PostBox