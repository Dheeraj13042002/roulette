const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account,
} = require("@solana/web3.js");
const web3 = require("@solana/web3.js");

const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
//For checking whether the connection is successfully made
console.log(connection);


//The winning prize for the player is airdropped here (You can also use a wallet with good amount of SOL). But for the player, 
// they need to have a wallet from which they will be paying SOL or receiving prize. We can generate a new wallet pair using the Keypair method.
const userWallet=web3.Keypair.generate();
console.log(userWallet);

// const userWallet=web3.Keypair.fromSecretKey(Uint8Array.from(userSecretKey));

const publicKey = new PublicKey(newPair._keypair.publicKey).toString();

const secretKey = newPair._keypair.secretKey


const transferSOL=async (from,to,transferAmt)=>{
    try{
        const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const transaction=new web3.Transaction().add(
            web3.SystemProgram.transfer({
                fromPubkey:new web3.PublicKey(from.publicKey.toString()),
                toPubkey:new web3.PublicKey(to.publicKey.toString()),
                lamports:transferAmt*web3.LAMPORTS_PER_SOL
            })
        )
        const signature=await web3.sendAndConfirmTransaction(
            connection,
            transaction,
            [from]
        )
        return signature;
    }catch(err){
        console.log(err);
    }
}

const getWalletBalance = async (pubk)=>{
    try{
        const connection=new web3.Connection(web3.clusterApiUrl("devnet"),"confirmed");
        const balance=await connection.getBalance(new web3.PublicKey(pubk));
        return balance/web3.LAMPORTS_PER_SOL;
    }catch(err){
        console.log(err);
    }
}

const airDropSol = async () => {
    try {
        //As we had had done earlier, we need to create a connection object and a
        //  walletKeyPair object for the airdrop function.
        const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
        const walletKeyPair = await Keypair.fromSecretKey(secretKey);
        //Now, we first create an airdrop signature using the wallet details
        //  and the amount of SOL we want to airdrop (you can airdrop at max 2SOL in one transaction).
        //  We then await a confirmation for the transaction from the network. 
        console.log(`-- Airdropping 2 SOL --`)
        const fromAirDropSignature = await connection.requestAirdrop(
            new PublicKey(walletKeyPair.publicKey),
            2 * LAMPORTS_PER_SOL
        );
        await connection.confirmTransaction(fromAirDropSignature);
    } catch (err) {
        console.log(err);
    }
}