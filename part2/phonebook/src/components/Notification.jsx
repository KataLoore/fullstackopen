const Notification = ({ notification }) => {
  if (notification === null) {
    return null
  }

  const success = {
    color: 'green',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
  }

  return (
    <div style={success}>
      {notification}
    </div>
  )
}

export default Notification