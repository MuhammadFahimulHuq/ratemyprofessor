<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('rating');
            $table->text('comment');
            $table->integer('like')->nullable();
            $table->integer('dislike')->nullable();
            $table->timestamps();
            $table->unsignedInteger('reviewBy_id');
            $table->foreign('reviewBy_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedInteger('reviewFor_id');
            $table->foreign('reviewFor_id')->references('id')->on('users')->onDelete('cascade');
        });

 
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reviews');
    }
}
