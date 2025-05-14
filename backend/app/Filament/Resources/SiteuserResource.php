<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SiteuserResource\Pages;
use App\Filament\Resources\SiteuserResource\RelationManagers;
use App\Models\Siteuser;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SiteuserResource extends Resource
{
    protected static ?string $model = Siteuser::class;

    protected static ?string $navigationIcon = 'heroicon-o-command-line';
      protected static ?string $navigationLabel ="Client";
    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Toggle::make("status"),
                TextInput::make("name")->label("Client Name"),
                TextInput::make("email")->label("Client Email"),
                TextInput::make("companyname")->label("Company Name"),
                TextInput::make("companyname")->label("Company Name"),
                TextInput::make("numberone")->label("First Number"),
                TextInput::make("numbertwo")->label("Second Number"),
                TextInput::make("address")->label("Address"),
                TextInput::make("about")->label("About"),
                Repeater::make("pdf")->schema([
                    FileUpload::make('pdf')
                        ->label('PDF File')
                        ->downloadable(), 
            
                    DatePicker::make('time')
                        ->label('Upload Date')
                        ->default(now())
                        ->required(),
                ])

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ToggleColumn::make("status"),
                TextColumn::make("name")->label("Client Name"),
                TextColumn::make("email")->label("Client Email"),
                TextColumn::make("companyname")->label("Company Name"),
                TextColumn::make("name")->label("Client Name"),
                TextColumn::make("numberone")->label("First Number"),
                TextColumn::make("numbertwo")->label("Second Number"),
                TextColumn::make("address")->label("Address"),
                TextColumn::make("about")->label("About"),
                TextColumn::make('pdf')
                ->label('Uploaded PDFs')
                ->html()
                ->formatStateUsing(fn ($record) =>
                collect($record->pdf)->map(fn ($item) =>
                    '<a class="underline text-blue-600" target="_blank" href="' . asset('storage/' . $item['pdf']) . '">' ."Download File" . '</a>'
                )->implode('<br>') ?? '-'
            ),
              
            ])
            ->filters([
                //
            ])
            ->actions([
                // Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListSiteusers::route('/'),
            'create' => Pages\CreateSiteuser::route('/create'),
            'edit' => Pages\EditSiteuser::route('/{record}/edit'),
            // 'view' => Pages\ViewUser::route('/{record}'),
        ];
    }
}
