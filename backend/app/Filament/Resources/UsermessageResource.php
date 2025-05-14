<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UsermessageResource\Pages;
use App\Filament\Resources\UsermessageResource\RelationManagers;
use App\Models\Usermessage;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UsermessageResource extends Resource
{
    protected static ?string $model = Usermessage::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-ellipsis';

 

protected static ?string $navigationLabel="User Messages";
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ToggleColumn::make('checked'),
                TextColumn::make('name')->sortable()->searchable(),
                TextColumn::make('email')->sortable()->searchable(),
                TextColumn::make('number')->sortable(),
                TextColumn::make('company')->sortable(),
                TextColumn::make('message')->limit(30),
                
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
            'index' => Pages\ListUsermessages::route('/'),
            'create' => Pages\CreateUsermessage::route('/create'),
            'edit' => Pages\EditUsermessage::route('/{record}/edit'),
        ];
    }
}
