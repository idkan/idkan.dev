import React from 'react'
import moment from 'moment'

const PostDetails = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>)
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>)
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>)
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className='text-xl font-semibold mb-4'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
      case 'paragraph':
        return <p key={index} className='py-6'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
      case 'heading-four':
        return <h4 key={index} className='text-md font-semibold mb-4'>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }

  return (
    <>
      <div className='w-full'>
        <div className='w-full px-4 md:px-6 text-xl text-gray-800 leading-normal'>
          <div className='font-sans'>
            <p className='text-base md:text-sm text-green-500 font-bold'>&lt; <a href='#' className='text-base md:text-sm text-green-500 font-bold no-underline hover:underline'>BACK TO BLOG</a></p>
            <h1 className='font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4'>
              {post.title}
            </h1>
            {post?.featuredImage && (
              <div className='relative overflow-hidden shadow-md my-6'>
                <img src={post.featuredImage.url} alt={post.title} className='object-top h-full w-full rounded-t-lg' />
              </div>
            )}
            <p className='text-sm md:text-base font-normal text-gray-600'>
              Published {moment(post.date).format('DD MMMM YYYY')}
            </p>
          </div>
          <div className='post-content'>
            {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item))

              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
          </div>
        </div>

        <div className='text-base md:text-sm md:px-6 text-gray-500 px-4 py-6'>
          Tags:&nbsp;
          {post.categories.map((category, index) => (
            <span className='text-base md:text-sm text-green-500 no-underline' key={index}>{category.name}</span>
          ))}
        </div>

      </div>

      {/* <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img src={post.featuredImage.url} alt={post.title} className='object-top h-full w-full rounded-t-lg' />
        </div>
        <div className='px-4 lg:px-0'>
          <div className='flex items-center mb-8 w-full'>
            <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
              <img src={post.author.photo.url} alt={post.author.name} height='30px' width='30px' className='align-middle rounded-full' />
              <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
            </div>
            <div className='font-medium text-gray-700'>
              <BsCalendarDate className='inline mr-2' />
              <span>
                {moment(post.createdAt).format('MMMM DD YYYY')}
              </span>
            </div>
          </div>
          <h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
        </div>
      </div> */}
    </>

  )
}

export default PostDetails
