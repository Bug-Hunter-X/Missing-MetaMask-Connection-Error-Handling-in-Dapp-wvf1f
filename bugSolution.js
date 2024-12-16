async function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');    return;
  }

  try {
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (accounts.length > 0) {
      const account = accounts[0];
      console.log('Found authorized account:', account);
      return account; // Return the connected account
    } else {
      console.log('No authorized account found');
    }
  } catch (error) {
    console.error('Error checking for connected account:', error);
    // You could add a user-friendly alert here like:
    // alert('Please connect your MetaMask wallet!');
  }
}