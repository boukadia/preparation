<?php

// Contexte du Challenge : Système de Commande en Ligne
// Tu vas modéliser un mini système de commande en ligne pour une boutique. Le but est de manipuler des objets liés, d'utiliser des traits, de typer ton code, d'utiliser les méthodes magiques, etc.

// declare(strict_types=1);
// class User{
//     private string $name;
//     private string $email;
//     private Cart $cart;
//     private array $orders=[];
//     public function __construct($name,$email){
//         $this->name=$name;
//         $this->email=$email;

//     }
//     public function addOrder(Order $order){
//         $this->orders[]=$order;
//         // array_push($this->orders,$order);

//     }

//     public function __get($param){ //hadi katjib lina ay propriety private 'ya3ni kanst3mloha blast gettere hit ila bghit nrj3 name et email ... 3iwad nktbo ch7al mn getters hadi katir ghir hadi okatjib biha ay propirty
//         return $this->$param;

//     }
//     public function __set($name, $value){
//         $this->name=$value;
//     }
// }
// class Product{
//     private string $reference;
//     private string $name;
//     private float $price;
//     private User $user;
//     public function __construct(string $reference,string $name,float $price){
//         $this->reference=$reference;
//         $this->name=$name;
//         $this->price=$price;

//     }
//     public function getPrice(){
//        return $this->price;
//     }
//     public function equals(Product $product){
//         return $this->reference=$product->reference;
//     }
// }
// trait PriceTotale{
//     public function getTotalePrice(){
//         $totalPrice=0;
//         foreach($this->products as $product){
//            $totalPrice+=$product->getPrice();
//         }
//         // array_push($this->orders,$order);
//         return $totalPrice;
//     }
// }

// class Order{
//     use PriceTotale;

//     private array $products=[];
//     private User $user;
//     public function __construct(User $user){
//         $this->user=$user;   
//     }
//     public function addProduct(Product $product){
//         $this->products[]=$product;
//         // array_push($this->orders,$order);

//     }
//     // ====================bima anna hadihi fonction ghatkon fi order class et cart class ya3ni  mdobla ghanst3mlo trait======================================
//     // public function getTotalePrice(){
//     //     $totalPrice=0;
//     //     foreach($this->products as $product){
//     //        $totalPrice+=$product->getPrice();
//     //     }
//         // array_push($this->orders,$order);
//     //     return $totalPrice;
//     // }
//     // ====================bima anna hadihi fonction ghatkon fi order class et cart class ya3ni  mdobla ghanst3mlo trait======================================

// }

// class Cart{ //panier
//     use PriceTotale;

//     private array $products=[];
//     private User $user;
//     public function __construct(User $user){
//         $this->user=$user;   
//     }
//     public function addProduct(Product $product){
//         $this->products[]=$product;
//         // array_push($this->orders,$order);
//     }
//     // ====================bima anna hadihi fonction ghatkon fi order class et cart class ya3ni  mdobla ghanst3mlo trait======================================

//     // public function getTotalePrice(){
//     //     $totalPrice=0;
//     //     foreach($this->products as $product){
//     //        $totalPrice+=$product->getPrice();
//     //     }
//         // array_push($this->orders,$order);
//     //     return $totalPrice;
//     // }
//     // ====================bima anna hadihi fonction ghatkon fi order class et cart class ya3ni  mdoblaghanst3mlo trait======================================

// }


// $user1=new User("ahmed","ahmed@gmzil.com");
// $product1=new Product("1111","stylo",2.5);
// $product2=new Product("2222","cahier",12);
// $product3=new Product("3333","miroire",10);
// $order1=new Order($user1);
// $order1->addProduct($product1);
// $order1->addProduct($product2);
// $order1->addProduct($product3);
// $user1->addOrder($order1);
// $user1->addOrder($order1);
// $order2=new Order($user1);
// $order2->addProduct($product1);
// $cart=new Cart($user);
// $cart->addProduct($product1);
// $cart->addProduct($product2);
// $user1->addOrder($order2);
// echo $user1->email;


// ======================================
// ======================================

// Challenge 2 — Système Bancaire Orienté Objet
// Objectif :
//  Créer un système de comptes bancaires (courant + épargne).
abstract class CompteBancaire
{
    protected $titulaire;
    protected $solde;
    public function __construct($solde, $titulaire)
    {
        $this->solde = $solde;
        $this->titulaire = $titulaire;
    }
    public function deposer(float $montant)
    {
        $this->solde += $montant;
    }
    public function retirer(float $montant)
    {
        $this->solde -= $montant;
    }
    public function afficherSolde()
    {
        return $this->solde;
    }
    public abstract function  calculerInteret();
}
class CompteEpargne extends CompteBancaire
{
    private $interet;

    public function __construct($solde, $titulaire, $interet)
    {
        parent::__construct($solde, $titulaire);
        $this->interet = $interet;
    }
    public function calculerInteret()
    {
        return $this->solde = $this->solde * $this->interet;
    }
    public function afficherSolde()
    {
        return $this->solde = $this->solde - $this->solde * $this->interet;
    }
}
class compteCourant extends CompteBancaire
{

    public function calculerInteret()
    {
        echo  "no interet";
    }
}

class Banque
{
    private array $comptes = [];
    public function ajouterComptes(CompteBancaire $compte)
    { //on peut ecrirre ajoutaComptes(CompteEpargne|compteCourant $compte)
        $this->comptes[] = $compte;
    }
    public function afficheComptes()
    {
        return $this->comptes;
    }
}
// $user=new CompteEpargne(12,'tayeb',0.1);
// $user1=new compteCourant(5,"ahmed");
// echo $user->deposer(10);
// echo $user->retirer(5);
// echo $user->afficherSolde();
// $comptes=new Banque();
// $comptes->ajouterComptes($user);
// $comptes->ajouterComptes($user1);
// var_dump($comptes->afficheComptes());



// ==========================
// ==========================
// ==========================


// Challenge 3 — Gestion de Bibliothèque
// Objectif :
//  Créer un mini système d’emprunt de livres.
class Livre
{
    private $titre;
    private int $reference;
    private $auteur;
    private bool $disponible;
    public function __construct($titre, $auteur, $disponible, int $reference)
    {
        $this->titre = $titre;
        $this->auteur = $auteur;
        $this->disponible = $disponible;
        $this->reference = $reference;
    }
    public function getStatus()
    {
        return $this->disponible;
    }
    public function setStatus($status)
    {
        $this->disponible = $status;
    }

    public function emprunter() {}
    public function rendre() {}
    public function afficherInfos()
    {
        return $this->titre;
    }
    public function __get($name)
    {
        return $this->$name;
    }
}
class Utilisateur
{
    private $nom;
    private array $emprunts = [];
    public function emprunterLivre(livre $livre, $status = 0)
    {
        $this->emprunts[] = $livre;
        $livre->setStatus($status);
    }
    public function rendreLivre(livre $livre)
    {
        $nouveauTable = [];
        foreach ($this->emprunts as $emprunt) {
            if ($livre->reference != $emprunt->reference) {
                $nouveauTable[] = $emprunt;
            }
        }
        $this->emprunts = $nouveauTable;
        $livre->setStatus(true);
    }
    public function afficherEmprunts()
    {

        foreach ($this->emprunts as $emprunt) {
            echo ($emprunt->reference);
            echo "<br>";
        }
    }
}
$livre1 = new Livre("boite", "mohammed", true, 1);
$livre2 = new Livre("mort", "mohammed", true, 2);
$livre3 = new Livre("test", "mohammed", 1, 3);
// echo $livre1->titre;

$utilisateur = new Utilisateur;
$utilisateur->emprunterLivre($livre1);
// $utilisateur->emprunterLivre($livre2);
$utilisateur->emprunterLivre($livre2);
$utilisateur->rendreLivre($livre1);
$utilisateur->emprunterLivre($livre1);

$utilisateur->afficherEmprunts();
// var_dump( $livre1->getStatus());

// class User
// {
//     private $name;
//     private $email;
//     private array $orders = [];
//     private Panier $panier;
//     public function __construct(string $name, string $email)
//     {
//         $this->name = $name;
//         $this->email = $email;
//     }
//     public function addOrder(Order $order)
//     {
//         $this->orders[] = $order;
//     }
//     public function afficheOrders()
//     {
//         return  $this->orders;
//     }
// }
// trait TotalPrice
// {
//     public function PrixTotale()
//     {
//         $somme = 0;
//         foreach ($this->produits as $produit) {
//             $somme += $produit->getPrix();
//         }
//         $this->prixTotal = $somme;
//         return $this->prixTotal;
//     }
// }
// class Order
// {
//     use TotalPrice;
//     private User $user;
//     private float $prixTotal;
//     protected array $produits = [];
//     public function __construct(User $user)
//     {
//         $this->user = $user;
//     }
//     public function addProduit(Product $produit)
//     {
//         $this->produits[] = $produit;
//     }
//     public function getProduits()
//     {
//         return $this->produits;
//     }
//     // public function PrixTotale(){ bisabab wojod hadihi addala fi makanayn  drna trait bach ntfadaw attikrar
//     //     $somme=0;
//     //     foreach ($this->produits as $produit) {
//     //         $somme+=$produit->getPrix();
//     //     }
//     //$this->prixTotal=somme;
//     //return $this->prixTotal;
//     // }


// }
// class Panier
// {

//     use TotalPrice;
//     private User $user;
//     private float $prixTotal;
//     protected array $produits = [];
//     public function __construct(User $user)
//     {
//         $this->user = $user;
//     }
//     public function addProduit(Product $produit)
//     {
//         $this->produits[] = $produit;
//     }
//     public function getProduits()
//     {
//         return $this->produits;
//     }
//     // public function PrixTotale(){ bisabab wojod hadihi addala fi makanayn  drna trait bach ntfadaw attikrar
//     //     $somme=0;
//     //     foreach ($this->produits as $produit) {
//     //         $somme+=$produit->getPrix();
//     //     }
//     //$this->prixTotal=somme;
//     //return $this->prixTotal;
//     // }
// }
// class Product
// {
//     private $name;
//     private $prix;
//     public function __construct(string $name, float $prix)
//     {
//         $this->name = $name;
//         $this->prix = $prix;
//     }
//     public function getPrix()
//     {
//         return $this->prix;
//     }
// }
// abstract class  Payment
// {
//     protected User $owner;
//     protected Panier $panier;
//     public function __construct(Panier $panier, User $user)
//     {
//         $this->owner = $user;
//         $this->panier = $panier;
//     }
//     public abstract function pay();
// }
// class CreditCardPayment  extends Payment
// {
//     public  function pay()
//     {
//         return $this->panier->PrixTotale();
//     }
// }
// class PaypalPayment extends Payment
// {

//     public  function pay()
//     {
//         return $this->panier->PrixTotale();
//     }
// }

// $user1 = new User("ahmed", "ahmed@gmail.com");
// $produit1 = new Product("stylo", 2.5);
// $produit2 = new Product("birkar", 3);
// $produit3 = new Product("miroire", 6);
// $produit4 = new Product("cahier", 5);
// $order1 = new Order($user1);
// $panier1 = new Panier($user1);
// $order1->addProduit($produit1);
// $order1->addProduit($produit2);
// $panier1->addProduit($produit1);
// $panier1->addProduit($produit2);
// $user1->addOrder($order1);
// $creditCardPayment = new CreditCardPayment($panier1, $user1);

// // print_r($order1->PrixTotale());      

// print_r($creditCardPayment->pay());

// // =========================================
// // =========================================
// // =========================================
