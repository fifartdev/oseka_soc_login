import React from 'react';

const LikePage = () => {
  const handleLike = () => {
    // Replace 'PAGE_ID' with the actual Facebook Page ID you want the user to like.
    const pageId = 'oseka.gr';

    // Fetch the Page access token for the user.
    fetch(`https://graph.facebook.com/v12.0/${pageId}?fields=access_token`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${YOUR_USER_ACCESS_TOKEN}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.access_token) {
          // Use the Page access token to like the Facebook Page.
          fetch(`https://graph.facebook.com/v12.0/${pageId}/likes`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${data.access_token}`,
            },
          })
            .then((response) => response.json())
            .then((likeResponse) => {
              console.log('Page Liked:', likeResponse);
              // You can handle the success here, e.g., show a success message.
            })
            .catch((error) => {
              console.error('Error liking page:', error);
              // Handle errors here, e.g., show an error message to the user.
            });
        } else {
          console.error('Page access token not found.');
          // Handle errors here, e.g., show an error message to the user.
        }
      })
      .catch((error) => {
        console.error('Error fetching Page access token:', error);
        // Handle errors here, e.g., show an error message to the user.
      });
  };

  return (
    <div>
      <h1>Like a Facebook Page</h1>
      <button onClick={handleLike}>Like Page</button>
    </div>
  );
};

export default LikePage;
