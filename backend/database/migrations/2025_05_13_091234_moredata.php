<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('siteusers', function (Blueprint $table) {
            //
            $table->string("numberone")->nullable();
            $table->string("numbertwo")->nullable();
            $table->string("address")->nullable();
            $table->Text("about")->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('siteusers', function (Blueprint $table) {
            //
        });
    }
};
