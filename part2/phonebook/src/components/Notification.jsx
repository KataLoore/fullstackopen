const Notification = ({ notification, type }) => {
  if (notification === null) {
    return null
  }

  const style = {
    color: type === 'success' ? 'green' : 'red',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  return (
    <div style={style}>
        {notification}
    </div>
) 
}

export default Notification