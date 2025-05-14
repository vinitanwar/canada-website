<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Filament\Resources\BlogResource\RelationManagers;
use App\Models\Blog;
use Filament\Forms;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ColorColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $navigationIcon = 'heroicon-o-bold';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make("title")->label("Title")->required(),
                TextInput::make("type")->label("Type")->required(),
                ColorPicker::make('color'),


                TextInput::make("des")->label("Description")->required(),
                TextInput::make("name")->label("Your Name")->required(),
            FileUpload::make("image")->label("Image")->image()->required(),
            Repeater::make('details')
    ->label('Details')
    ->schema([
        TextInput::make('title')->required(),
        Textarea::make('des')
            ->label('Description')
            ->rows(3),
    ]),

    Toggle::make("status")
            ]);

    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ToggleColumn::make("status"),
                ImageColumn::make("image")->label("Image"),
                TextColumn::make("title")->label("Title"),
                TextColumn::make("type")->label("Type"),
                ColorColumn::make('color'),


                TextColumn::make("des")->label("Description"),
                TextColumn::make("name")->label("BLoger Name"),
              
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}
