<template>


  <div class="row mt-5"> 
    <div class="col-6 offset-3 card">

        <header>
            <slot name="header"></slot>

        </header>
        <div class="content" >
            <slot name="content"></slot>
        </div>
        <footer class="footer">
            <slot name="footer">

            </slot>
        </footer>
        
        <slot></slot>


    </div>
</div>
</template>