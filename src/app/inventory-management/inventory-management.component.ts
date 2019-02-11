import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet.service'
import { Pet,Category,Tag } from '../../models/PetModel'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {

  currentPetModel: Pet = new Pet;
  availablePets: Pet[] = [];
  soldPets: Pet[] = [];
  selectedTags: string[] = [];
  public loading = false;
  constructor(private petService: PetService, public router: Router) { }

  //var r = confirm("Press a button!");
  updatePetStatus(pet: Pet) {
    debugger;
    this.loading = true;
    var r = confirm("Are you sure you want to mark this pet as sold?");
    if (r == true) {
      pet.status = "sold";
      this.petService.updatePet(pet)
        .subscribe(result => {
          debugger;
          alert("Pet marked as sold");
          this.loading = false;
        });

    }
  }
  updateDeletePet(pet: Pet) {
    debugger;
    this.loading = true;
    var r = confirm("Are you sure you want to delete this pet?");
    if (r == true) {
      this.petService.deletePet(pet.id)
        .subscribe(result => {
          debugger;
          alert("Pet marked as sold");
          this.loading = false;
        });
    }
  }
  saveCurrentPet() {
    debugger;
    this.loading = true;
    for (var i = 0; i < this.selectedTags.length; i++) {
      this.currentPetModel.tags.push({ id: 0, name: this.selectedTags[i] });
    }
    this.petService.InsertPet(this.currentPetModel)
      .subscribe(result => {
        debugger;
        alert("Pet marked as sold");
        this.loading = false
        this.currentPetModel = new Pet();
        this.selectedTags = [];
      });

  }
  loadPetInventory() {
    this.loading = true;
    this.petService.getPetsByStatus("available")
      .subscribe(result => {
        this.availablePets = result;
        this.loading = false;
      });
    this.petService.getPetsByStatus("sold")
      .subscribe(result => {
        this.soldPets = result;
        this.loading = false;
      });

  }

  ngOnInit() {
    debugger;
    this.loadPetInventory();
  }

}
